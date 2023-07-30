import classes from "./CartIcon.module.css";
const UploadIcon = () => {
  return (
    <svg
      className={classes.cartIcon}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <title />{" "}
        <g id="Complete">
          {" "}
          <g id="upload">
            {" "}
            <g>
              {" "}
              <path
                d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />{" "}
              <g>
                {" "}
                <polyline
                  data-name="Right"
                  fill="none"
                  id="Right-2"
                  points="7.9 6.7 12 2.7 16.1 6.7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />{" "}
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  x2="12"
                  y1="16.3"
                  y2="4.8"
                />{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
export default UploadIcon;
