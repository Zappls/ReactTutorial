import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z.string({ invalid_type_error: "Description is required." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "The minimum amount is one." }),
  category: z.string().min(1, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [listData, setListData] = useState<FormData[]>([]);
  const [filter, setFilter] = useState<string>("AllCategories");

  const onSubmit = (data: FormData) =>
    setListData((prevData) => [...prevData, data]);

  const filteredData =
    filter === "AllCategories"
      ? listData
      : listData.filter((item) => item.category === filter);

  const handleDelete = (index: number) => {
    setListData((prevData) => prevData.filter((_, i) => i !== index));
  };
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
          id="all-category-select"
          className="form-control"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
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
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
