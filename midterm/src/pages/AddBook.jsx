import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    title: Yup.string().min(2, "Минимум 2 символа").required("Обязательно"),
    author: Yup.string().required("Обязательно"),
    genre: Yup.string()
      .oneOf(["fiction", "nonfiction", "tech"], "Неверный жанр")
      .required("Обязательно"),
    rating: Yup.number()
      .min(0)
      .max(5)
      .required("Обязательно"),
  });

  return (
    <div className="container">
      <h2>Add Book</h2>
      <Formik
        initialValues={{ title: "", author: "", genre: "fiction", rating: 0 }}
        validationSchema={schema}
        onSubmit={(values) => {
          const newBook = { ...values, id: Date.now() };
          const books = JSON.parse(localStorage.getItem("books")) || [];
          localStorage.setItem("books", JSON.stringify([...books, newBook]));
          navigate("/books");
        }}
      >
        {() => (
          <Form>
            <label>Title:</label>
            <Field name="title" />
            <ErrorMessage name="title" component="div" style={{ color: "red" }} />

            <label>Author:</label>
            <Field name="author" />
            <ErrorMessage name="author" component="div" style={{ color: "red" }} />

            <label>Genre:</label>
            <Field as="select" name="genre">
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Nonfiction</option>
              <option value="tech">Tech</option>
            </Field>
            <ErrorMessage name="genre" component="div" style={{ color: "red" }} />

            <label>Rating:</label>
            <Field name="rating" type="number" step="0.1" />
            <ErrorMessage name="rating" component="div" style={{ color: "red" }} />

            <br />
            <button type="submit" style={{ marginTop: "10px" }}>Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
