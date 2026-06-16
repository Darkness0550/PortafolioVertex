import TechStack from '../sections/TechStack';

export default function StackPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1 }}>
        <TechStack />
      </div>
    </div>
  );
}
