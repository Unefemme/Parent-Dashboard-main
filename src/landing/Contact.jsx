const Contact = () => {
  return (
    <div className="bg-yellow-100 mx-28 py-16 px-14 flex items-center justify-between">
      {/* Left Content */}
      <div className="text-[#590E87]">
        <h2 className="text-4xl font-black mb-6">Contact Us</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-gray-600 font-bold">Email</h3>
            <p>support@educationalapp.com</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold">Phone</h3>
            <p>+1 123-456-7890</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold">Address</h3>
            <p>123 Main Street, City, State, Country</p>
          </div>
          <button className="bg-[#590E87] text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>

      {/* Right Content */}
      <form className="flex flex-col space-y-4 bg-gray-100 text-black p-4 rounded">
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <h4 className="font-medium">Name</h4>
            <input
              type="text"
              className="border rounded p-2"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-medium">Surname</h4>
            <input
              type="text"
              className="border rounded p-2"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Mail</h4>
          <input
            type="email"
            className="border rounded p-2"
            placeholder="johndoe@mail.net"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Address</h4>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Capitol, WA"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium">Description</h4>
          <textarea className="border rounded p-2"></textarea>
        </div>
        <button className="bg-[#590E87] text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
