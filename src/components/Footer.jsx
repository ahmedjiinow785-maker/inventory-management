// src/components/Footer.jsx

const Footer = () => {
    return (
        <footer className="bg-white shadow mt-auto py-4 text-center text-gray-600">
            © {new Date().getFullYear()} Inventory Management System. All Rights Reserved.
        </footer>
    );
};

export default Footer;