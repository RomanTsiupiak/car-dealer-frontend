import { Typography } from "@/components";

export const UiLogo = () => {
  return (
    <div className="flex gap-1 items-end">
      <Typography variant="h4" className="uppercase text-slate-700">
        car
      </Typography>

      <Typography variant="small-bold" className="uppercase text-red-500">
        dealership
      </Typography>
    </div>
  );
};
