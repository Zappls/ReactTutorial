import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string({ invalid_type_error: "Description is required." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "The minimum amount is one." }),
  category: z.string({ invalid_type_error: "Category is required." }),
  all_category: z.string(),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //need to find out how to work with data

  let listData: FieldValues = {};
  const onSubmit = (data: FieldValues) => listData.push(data);
  console.log(listData);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}{" "}
        </div>

        <div className="mb-3">
          <label htmlFor="category-select" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category-select"
            className="form-control"
            required
          >
            <option hidden></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}{" "}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="mb-3 mt-3">
        <select
          {...register("all_category")}
          id="all-category-select"
          className="form-control"
          required
        >
          <option hidden></option>
          <option value="AllCategories">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div>
        <ul className="list-group"></ul>
      </div>
    </>
  );
};

export default ExpenseTracker;
