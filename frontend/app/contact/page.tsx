export default function ContactPage() {
    return (
      <section>
        <h1>聯絡我們</h1>
        <p>成大土木系友會</p>
        <p>電話：06-2757575</p>
        <p>Email:</p>
        <iframe
          src="https://maps.app.goo.gl/uzqJSmoXX3DUw4sb7"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    );
  }