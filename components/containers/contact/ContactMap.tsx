const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15116.694455809833!2d124.46683287146311!3d10.87997771695039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8211257dd0daf%3A0x58028154dd5a3681!2sFenestra%20Virtual%20Solutions!5e0!3m2!1sen!2sph!4v1765016526167!5m2!1sen!2sph"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
