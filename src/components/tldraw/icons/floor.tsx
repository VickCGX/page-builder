import { IIconProps } from "./interfaces/IIconProps";

export default function FloorIcon({ width, height, color }: IIconProps) {
  return (
    <>
      <svg
        width={`${width}px`}
        fill={color}
        height={`${height}px`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2v18h3v-1H3v-6h3V9h5V8H6V3h15v5h-6v1h6v5h-4v1h4v6H11v-7h-1v5H8v1h2v2h12V2zm3 4H3V5h2zm-2 6v-1h2v1zm2-2H3V9h2zM3 8V7h2v1zm2-4H3V3h2z" />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
    </>
  );
}
