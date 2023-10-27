
export default function SignIn() {
  return (
    <>
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md-mb-6">
          <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="key" className="w:full rounded-2xl" />
        </div>
        <div>
          <form className="w-full md:w-[67%] lg:w-[40%]">
            <input className="w-full" type="text" />
          </form>
          <form action="">
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
