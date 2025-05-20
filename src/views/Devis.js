import React, {useState, useRef, use} from 'react'
import { motion } from 'framer-motion';
import { mainColors } from '../styles/variables';
import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";

function Devis({setShowDevis}) {
  const formRef = useRef();
  const [ images, setImages] = useState([]);

  // image number check 
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 6) {
      alert("Vous ne pouvez ajouter que 6 images maximum.");
      return;
    }

    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...newImages]);
  };

// generation pdf 
  const generatePDF = async (formData) => {
    const doc = new jsPDF();
    doc.text(`Nom: ${formData.get("name")}`, 10, 10);
    doc.text(`Message: ${formData.get("message")}`, 10, 20);

    let y = 30;
    for (let i = 0; i < images.length; i++) {
      const imageFile = images[i].file;
      const reader = await readFileAsDataURL(imageFile);
      doc.addImage(reader, "JPEG", 10, y, 80, 60);
      y += 70;
    }

    return doc.output("datauristring");
  };

const readFileAsDataURL = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  };

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const pdf = await generatePDF(formData);

    emailjs.send(
      "service_xn58ryn",
      "template_xh6ri1z",
      {
        to_email: "project@enaradesign.com",
        email: formData.get("email"),
        reason: formData.get("reason"),
        // pdf_attachment: pdf,
      },
      "f7i-MgSM-lphH4E2m"
    )
    .then(() => alert("PDF envoyé à Enara 🎉"))
    .catch((err) => console.error("Erreur:", err));
  };
  return (
        <motion.div
            initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: window.innerWidth }}
            transition={{ duration: 1.7 , ease: "easeInOut" }}
            classNameName='text-white items-center justify-center h-screen w-screen absolute top-0'
            style={{backgroundColor: mainColors.mainBrown}}
        >
          <div className='flex h-screen w-screen items-center justify-center'>
            <div className='w-2/3 bg-white shadow-xl flex px-10 py-10'>
              <div className='w-1/2 pr-10'>
                <form className="" ref={formRef} onSubmit={handleSubmit}>
                  <h6 className='mb-4 font-light'>Demander un devis</h6>
                  <div className="mb-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-light text-gray-500 dark:text-white">Votre email</label>
                    <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 text-sm block w-full p-0.5 dark normal-case" placeholder="example@gmail.com" required />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="reason" className="block mb-2 text-sm font-light text-gray-500 dark:text-white">Demandez ce que vous voulez?</label>
                    <textarea id="reason" name="reason" className="border h-[100px] border-gray-300 text-gray-900 text-sm  block w-full p-0.5 normal-case" placeholder='ici...' required />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="ajouterImage" className="text-sm font-medium text-gray-500 mb-2">Envoyez-nous des images </label>
                      <input id="ajouterImage" type="file" accept="images/*" multiple className="w-full p-0 m-0 h-[40px]"  onChange={handleImageChange}/>
                  </div>
                   <div className="flex gap-2 mt-2 flex-wrap w-full h-10">
                    {images.map((img, idx) => (
                    <img key={idx} src={img.preview} alt={`img-${idx}`} className="h-20 rounded" />
                    ))}
                  </div>
                  <button type="cancel" className=" mr-5 bg-white border-[1px] hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xs text-sm w-full sm:w-auto px-5 py-1 text-center"
                    style={{borderColor: mainColors.mainBrown, color: mainColors.mainBrown}}
                    onClick={() => setShowDevis(false)}
                  >Annuler</button>
                  <button type="submit" className="text-white hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xs text-sm w-full sm:w-auto px-5 py-1 text-center"
                    style={{backgroundColor: mainColors.mainBrown}}
                  >Envoyer</button>
                </form>
              </div>
              <div className='w-1/2 h-1/1 bg-black'>
                <img className="h-full w-auto object-cover" src="/img/bg_accueil.jpg" alt="formImage"/>
              </div>
            </div>
          </div>
           
        </motion.div>
  )
}

export default Devis;
