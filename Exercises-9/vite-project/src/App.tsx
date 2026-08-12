
import { AgeForm } from './AgeForm';
import { ContactForm } from './ContactForm';
import { EmailForm } from './EmailForm';

const App = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email la helay:", email);
  };

  const handleAgeSubmit = (age: number) => {
    console.log("Da'da la helay:", age);
  };

  const handleContactSubmit = (data: { name: string; email: string }) => {
    console.log("Xogta Xiriirka la helay:", data);
  };

  

  return (
    <div>
      
      {/* 1. Email Form */}
      <section style={{ marginBottom: '20px' }}>
        <EmailForm onSubmit={handleEmailSubmit} />
      </section>

      <hr />

      {/* 2. Age Form */}
      <section style={{ margin: '20px 0' }}>
        <AgeForm onSubmit={handleAgeSubmit} />
      </section>

      <hr />

      {/* 3. Contact Form */}
      <section style={{ marginTop: '20px' }}>
        <ContactForm onSubmit={handleContactSubmit} />
      </section>

       
    </div>
  );
};

export default App;