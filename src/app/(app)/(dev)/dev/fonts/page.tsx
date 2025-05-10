import React from "react";

const FontShowcase = () => {
  return (
    <section className="container w-full mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Font Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Default Font (Manrope)</h2>
          <p className="mb-4">This text uses the default Manrope font.</p>
          <p className="font-bold">Bold text in Manrope</p>
          <p className="font-medium">Medium text in Manrope</p>
          <p className="font-normal">Normal text in Manrope</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4 font-helvetica">
            Primary Helvetica
          </h2>
          <p className="mb-4 font-helvetica">
            This text uses the primary Helvetica font.
          </p>
          <p className="font-bold font-helvetica">
            Bold text in Primary Helvetica
          </p>
          <p className="font-medium font-helvetica">
            Medium text in Primary Helvetica
          </p>
          <p className="font-normal font-helvetica">
            Normal text in Primary Helvetica
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4 font-helvetica-secondary">
            Secondary Helvetica
          </h2>
          <p className="mb-4 font-helvetica-secondary">
            This text uses the secondary Helvetica font.
          </p>
          <p className="font-bold font-helvetica-secondary">
            Bold text in Secondary Helvetica
          </p>
          <p className="font-medium font-helvetica-secondary">
            Medium text in Secondary Helvetica
          </p>
          <p className="font-normal font-helvetica-secondary">
            Normal text in Secondary Helvetica
          </p>
        </div>
      </div>
    </section>
  );
};

export default FontShowcase;
