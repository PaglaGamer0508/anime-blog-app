import { LucideProps, User } from "lucide-react";

export const Icons = {
  liked: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48">
      <title>favorite</title>
      <g className="nc-icon-wrapper">
        <path
          d="M43.192,6.808a13.016,13.016,0,0,0-18.385,0Q24.386,7.23,24,7.7c-.257-.311-.526-.606-.808-.888A13,13,0,0,0,4.807,25.192L23.292,43.677a1,1,0,0,0,1.414,0L43.191,25.192A13.012,13.012,0,0,0,43.192,6.808Z"
          fill="#EF4444"></path>
      </g>
    </svg>
  ),
  likeLoading: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 64 64">
      <title>favorite</title>
      <g
        strokeLinecap="square"
        strokeWidth="4"
        fill="#546e7a"
        stroke="#546e7a"
        strokeLinejoin="miter"
        className="nc-icon-wrapper"
        strokeMiterlimit="10">
        <path d="M57.207,10.793 c-6.39-6.39-16.751-6.39-23.142,0c-0.787,0.787-1.472,1.636-2.066,2.529c-0.593-0.892-1.279-1.742-2.066-2.529 c-6.39-6.39-16.751-6.39-23.142,0c-6.391,6.39-6.391,16.751,0,23.142L32,59.142l25.207-25.207 C63.598,27.544,63.598,17.183,57.207,10.793z"></path>
      </g>
    </svg>
  ),
  like: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 64 64">
      <title>favorite</title>
      <g
        strokeLinecap="square"
        strokeWidth="4"
        fill="none"
        stroke="#ffffff"
        strokeLinejoin="miter"
        className="nc-icon-wrapper"
        strokeMiterlimit="10">
        <path d="M57.207,10.793 c-6.39-6.39-16.751-6.39-23.142,0c-0.787,0.787-1.472,1.636-2.066,2.529c-0.593-0.892-1.279-1.742-2.066-2.529 c-6.39-6.39-16.751-6.39-23.142,0c-6.391,6.39-6.391,16.751,0,23.142L32,59.142l25.207-25.207 C63.598,27.544,63.598,17.183,57.207,10.793z"></path>
      </g>
    </svg>
  ),
  downIcon: (props: LucideProps) => (
    <svg
      {...props}
      fill="#C6CDDA"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 330 330"
      xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>{" "}
      </g>
    </svg>
  ),
  user: User,
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  github: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30">
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  ),
};
