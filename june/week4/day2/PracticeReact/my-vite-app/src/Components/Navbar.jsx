

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/services" style={{ marginRight: '1rem' }}>Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
