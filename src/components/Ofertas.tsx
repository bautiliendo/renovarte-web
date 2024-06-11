import React from 'react'


export const Ofertas: React.FC = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid '>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text:1xl font-bold py-2'>Ofertas</h1>
          <h1 className='md:text-2xl sm:text-1xl text:xl font-bold py-2'>Renovarte se ajusta a las exigencias de la Ley 25.326 de Protección de Datos Personales.</h1>
          <p>
            Los datos personales que el cliente/usuario(titular de los datos) brinde a este sitio como nombres, fecha de nacimiento, domicilio, números telefónicos, país, código postal, correo electrónico y/o cualquier otro que el usuario/cliente suministre voluntariamente, son incluídos en bases de datos bajo estrictas normas de confidencialidad y seguridad. La información personal no será revelada a terceros salvo en el caso que medie la necesidad del transporte de mercadería por medios tercerizados. La información también puede ser utilizada por Renovarte con el objetivo de mejorar la comunicación y la oferta de servicios y productos a sus usuarios y podrá ser utilizada para acciones promocionales de marketing. Los servicios de emisión de información a los usuarios vía correo electrónico, correo postal y mensaje de texto (SMS), cuentan con la autorización del usuario. En caso de que el usuario no desease recibir este tipo de información o acciones de marketing podrá solicitarlo a Renovarte via email ventas@gruponucleo.com.ar. La utilización de cualquiera de los servicios de Renovarte será considerado como aceptación por parte del usuario de los términos de esta Política de Privacidad.
          </p>
          <h1 className='md:text-2xl sm:text-1xl text:xl font-bold py-2'>Protección de datos personales</h1>
          <p>
            Sus datos personales y sus datos sobre tarjetas de pago están protegidos: la confirmación de su compra, se realiza mediante una conexión segura. Esto significa que la información viaja por internet cifrada y protegida, garantizando la seguridad y confidencialidad de los datos personales. Por eso utilizamos los mas sofisticados sistemas de seguridad como NPS, Visa, etc.
          </p>
        </div>
      </div>
    </div>
  )
}
