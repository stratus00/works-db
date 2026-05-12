import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/data/content";

export const metadata: Metadata = { title: "Contact" };

function InfoLabel({ text }: { text: string }) {
  return (
    <p className="font-ui text-xs tracking-widest uppercase text-wdb-gray-400 mb-2">
      {text}
    </p>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-6 md:px-12">
      <div className="md:grid md:grid-cols-2 gap-24">
        <div>
          <p className="font-ui text-xs tracking-widest uppercase text-wdb-gray-400 mb-8">
            Get in touch
          </p>
          <p className="font-ui text-base font-normal text-wdb-gray-600 mb-12">
            {contactInfo.formIntro}
          </p>
          <ContactForm />
        </div>

        <div className="mt-12 md:mt-0 space-y-8">
          <div>
            <InfoLabel text="Address" />
            <p className="font-ui text-base font-normal text-wdb-black">
              {contactInfo.address}
            </p>
          </div>
          <div>
            <InfoLabel text="Email" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-ui text-base font-normal text-wdb-black hover:text-wdb-warm transition-colors duration-200"
            >
              {contactInfo.email}
            </a>
          </div>
          <div>
            <InfoLabel text="Phone" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="font-ui text-base font-normal text-wdb-black hover:text-wdb-warm transition-colors duration-200"
            >
              {contactInfo.phone}
            </a>
          </div>
          {contactInfo.instagram && (
            <div>
              <InfoLabel text="Instagram" />
              <p className="font-ui text-base font-normal text-wdb-black">
                {contactInfo.instagram}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
