export default function CardBeneficios({ icon: Icon, titulo, descripcion }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-[#3a345deb] py-3 sm:py-2 px-5 rounded-md mb-4">
      <div className="bg-[#c9c3ff] w-12 h-12 flex items-center justify-center rounded-full">
        <Icon className="text-[#5f55bb] text-2xl" />
      </div>
      <div>
        <h3 className="text-[#9e94fa] montserrat-medium text-lg">{titulo}</h3>
        <p className="text-white ">{descripcion} </p>
      </div>
    </div>
  );
}
