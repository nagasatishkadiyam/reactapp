const Contact = () => {
    return (
        <div className="m-4-p-4">
            <h1 className="font-bold text-2xl text-center">Contact page</h1>
            <form>
                <input className="m-1 border p-1" placeholder="name" type="text" name="name"/>
                <input className="m-1 border p-1" type="text" name="lastname" placeholder="lastname"/>
                <button className="border bg-gray-100 rounded-lg font-bold">Submit</button>
            </form>
        </div>
    );
};

export default Contact;