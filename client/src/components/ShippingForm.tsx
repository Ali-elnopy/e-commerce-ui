import { shippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

const ShoppingForm = ({
  setShoppingForm,
}: {
  setShoppingForm: (data: shippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<shippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<shippingFormInputs> = (data) => {
    setShoppingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4 "
      onSubmit={handleSubmit(handleShippingForm)}
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="john doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="phone"
          placeholder="123456789"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>
      {/* Address */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="address">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="address"
          placeholder="123 Main St, Anytown"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>
      {/* City */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="city">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="city"
          placeholder="New York"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowBigRight className="w-4 h-4" />
      </button>
    </form>
  );
};
export default ShoppingForm;
