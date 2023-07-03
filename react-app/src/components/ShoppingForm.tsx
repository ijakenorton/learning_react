import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" }),
  amount: z.number({ invalid_type_error: "Age field is required" }),
  category: z.enum(["Groceries", "Utilities", "Entertainment"]),
  // category: z.string(),
});

type FormData = z.infer<typeof schema>;

const ShoppingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [items, setItems] = useState<FormData[]>([
    {
      description: "",
      amount: 0,
      category: "Groceries", // Assuming default category
    },
  ]);

  const [isEmpty, setEmpty] = useState(true);

  const onSubmit = (data: FieldValues) => {
    if (isEmpty) {
      items[0] = {
        description: data.description,
        amount: data.amount,
        category: data.category,
      };
    } else {
      items.push({
        description: data.description,
        amount: data.amount,
        category: data.category,
      });
    }
    setItems(items);
    setEmpty(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Name
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />

          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
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
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {!isEmpty && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ShoppingForm;
