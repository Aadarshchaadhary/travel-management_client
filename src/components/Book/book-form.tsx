
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";

const BookForm = () => {
  const { register } = useForm();
  return (
    <div>
      <h1 className="text-center mt-1 font-bold text-2xl">
        Fill The Form Below to Reserve Your Seat
      </h1>

      <form className="mt-10 flex flex-col gap-4 px-10 mx-auto">
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

        {/* button */}
      </form>
    </div>
  );
};

export default BookForm;
