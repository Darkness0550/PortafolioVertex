import Credentials from '../sections/Credentials';
import Testimonial from '../sections/Testimonial';

export default function ClientsPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1 }}>
        <Testimonial />
        <Credentials />
      </div>
    </div>
  );
}
