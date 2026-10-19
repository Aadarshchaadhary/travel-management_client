
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";
import api from "../../api";

type BookingFormData = {
  full_name: string;
  phone: string;
  total_person: number;
};

type BookFormProps = {
  packageId: string;
};

const BookForm = ({ packageId }: BookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    console.log("FORM SUBMITTED:", data);
    console.log("PACKAGE ID:", packageId);

    try {
      const response = await api.post("/booking", {
        ...data,
        total_person: Number(data.total_person),
        tour_package: packageId,
      });

      console.log("BOOKING SUCCESS:", response.data);
      alert(response.data.message || "Booking successful!");
    } catch (error: any) {
      console.error("BOOKING ERROR:", error);
      alert(
        error.response?.data?.message ||
          "Booking failed. Check the browser Console."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex flex-col gap-4 px-10 mx-auto"
    >
      <Input
        label="Full Name"
        name="full_name"
        id="full_name"
        register={register}
        required
      />

      <Input
        label="Phone Number"
        name="phone"
        id="phone"
        register={register}
        required
      />

      <Input
        label="Total Seats"
        name="total_person"
        id="total_person"
        register={register}
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-blue-600 px-4 py-3 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default BookForm;
