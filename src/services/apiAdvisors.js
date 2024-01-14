import supabase from "./supaBase";
import { supabaseUrl } from "./supaBase";

export async function getAdvisors() {
  const { data, error } = await supabase.from("advisors").select("*");
  if (error) {
    console.log(error);
    throw new Error("Could not load Data");
  }
  return data;
}

export async function getAdvisor(id) {
  const { data, error } = await supabase.from("advisors").select().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Could not load Data");
  }
  return data;
}

// =========================================================== CREATE ========================================
export async function createAdvisor(newAdvisor) {
  // https://fbmnthpwcbpdarnmlxda.supabase.co/storage/v1/object/public/advisorImages/logo-dark.png
  const imageName = `${Math.random()}-${newAdvisor.img.name}`.replace("/", "");
  const imagePath = `https://fbmnthpwcbpdarnmlxda.supabase.co/storage/v1/object/public/advisorImages/${imageName}`;

  const { data, error } = await supabase
    .from("advisors")
    .insert([{ ...newAdvisor, img: imagePath }])
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("advisorImages")
    .upload(imageName, newAdvisor.img, {
      cacheControl: "3600",
      upsert: false,
    });

  // Delete advisor if storage error
  if (storageError) {
    await supabase.from("advisors").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin could not be created image problem");
  }

  return data;
}

// =========================================================== EDIT ========================================
export async function editAdvisor({ newAdvisor, id }) {
  const hasImagePath = newAdvisor.img?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newAdvisor.name}`
    .replace("/", "")
    .replace(" ", "");
  const imagePath = hasImagePath
    ? newAdvisor.img
    : `https://fbmnthpwcbpdarnmlxda.supabase.co/storage/v1/object/public/advisorImages/${imageName}`;

  const { data, error } = await supabase
    .from("advisors")
    .update({
      name: newAdvisor.name,
      company: newAdvisor.company,
      website: newAdvisor.website,
      tag: newAdvisor.tag,
      img: imagePath,
      legal: newAdvisor.legal,
    })
    .eq("id", id);
  // IMAGE ALREADY EXISTS ------------------
  if (hasImagePath) return data;
  // UPLOAD NEW ------------------
  const { error: storageError } = await supabase.storage
    .from("advisorImages")
    .upload(imageName, newAdvisor.img, {
      cacheControl: "3600",
      upsert: false,
    });
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", id);
    throw new Error("There was a problem uploading the image");
  }

  if (error) {
    throw new Error("Advisor could not be updated");
  }
  return data;
}

// =========================================================== DELETE ========================================
export async function deleteAdvisor(id) {
  let deleteID = Number(id);
  console.log("IN DELETE API", Number(deleteID));
  const { data, error } = await supabase
    .from("advisors")
    .delete()
    .eq("id", deleteID);
  if (error) {
    console.log(error);
    throw new Error("Advisor could not be deleted");
  }
  return data;
}
