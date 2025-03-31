export function ProjectCard({ props }) {
  return (
    <div className="flex flex-col max-w-[45%] m-2 flex-1 min-w-[310px]">
      <div className="w-full">
        <img
          src={props.image}
          alt={props.project_name}
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className="flex flex-col w-4/5 text-left justify-center">
          {/* <p className="text-lg font-serif mb-2">{props.project_name}</p> */}
          <p className="text-sm font-sans text-gray-500">Decor / {props.tag}</p>
        </div>
      </div>
    </div>
  );
}
