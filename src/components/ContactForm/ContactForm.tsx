import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
} from "formik";

interface IFormValues {
  name: string;
  email: string;
  tel: string;
  message: string;
  address: string;
}

export const ContactForm = () => {
  const initialValues: IFormValues = {
    name: "lewis",
    email: "me@lewisandy.dev",
    tel: "123",
    message: "hello",
    address: "",
  };

  const handleSubmit = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    console.log({ values });
  };

  return (
    <section className="bg-darkergray py-4 text-gray-200">
      <div className="bg-darkgray py-16 pb-24">
        <h2 className="page-wrap text-4xl md:text-5xl font-bold mb-12 md:mb-24 tracking-wide text-center">
          Get in Touch
        </h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="page-wrap max-w-md">
            <div className="max-w-sm flex flex-col gap-6">
              <div>
                <Field
                  name="address"
                  className="absolute left-[-10000px]"
                  id="address"
                  type="text"
                  tabIndex={-1}
                />
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  name="name"
                  className="shadow appearance-none rounded bg-darkergray w-full py-2 px-3 text-gray-200 leading-tight focus:outline focus:outline-offset-2 focus:outline-[3px] focus:outline-neutral-400"
                  id="name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  name="email"
                  className="shadow appearance-none bg-darkergray rounded w-full p-3 text-gray-200 leading-tight focus:outline focus:outline-offset-2 focus:outline-[3px] focus:outline-neutral-400"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="tel"
                >
                  Phone Number
                </label>
                <Field
                  name="tel"
                  className="shadow appearance-none bg-darkergray rounded w-full p-3 text-gray-200 leading-tight focus:outline focus:outline-offset-2 focus:outline-[3px] focus:outline-neutral-400"
                  id="tel"
                  type="tel"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-200 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="shadow appearance-none bg-darkergray rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline focus:outline-offset-2 focus:outline-[3px] focus:outline-neutral-400"
                  rows={8}
                ></textarea>
              </div>
              <div className="relative">
                <button
                  className="block w-full bg-green-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline focus:outline-offset-2 focus:outline-[3px] focus:outline-neutral-400 disabled:bg-gray-800 disabled:hover:cursor-wait"
                  type="submit"
                >
                  Send Message
                </button>

                <div className="w-full absolute top-0 transform translate-y-10 opacity-0">
                  <p className="text-lg text-center">
                    Thank you for your message.
                  </p>
                  <p className="text-lg text-center">We'll be in touch soon!</p>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default ContactForm;
