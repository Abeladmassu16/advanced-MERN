import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ params })=> {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashbord/all-jobs");
}

const DeleteJob = () => {
  return (
    <h1>
      Delete job page
    </h1>
  )
}

export default DeleteJob
