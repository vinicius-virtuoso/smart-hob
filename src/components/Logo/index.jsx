function Logo({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "260"}
      height={size ? size : "260"}
      fill="none"
      viewBox="0 0 260 260"
    >
      <path
        fill="#4944A8"
        d="M257.112 223.446c-3.697-13.79-17.889-21.983-31.69-18.289-13.814 3.695-22.002 17.874-18.304 31.676 3.697 13.789 17.889 21.982 31.702 18.276 13.802-3.695 21.99-17.874 18.292-31.663zm-33.496-24.97c1.33-.354 2.66-.622 3.978-.805 3.051-16.228-.744-33.126-9.909-48.671.135 2.353.11 4.743-.097 7.181-3.344 39.149-51.63 73.227-107.823 76.116-30.116 1.549-56.376-6.181-73.765-19.702 14.814 15.593 35.436 28.517 59.83 36.052 39.585 12.241 78.963 7.157 104.467-10.534-4.357-17.301 6.015-35.004 23.319-39.637z"
      ></path>
      <path
        fill="#E42B2B"
        d="M139 19c-20.905 5.035-42.383 16.399-61.107 33.737-30.364 28.14-45.638 64.754-43.054 95.65 17.163 4.889 27.317 22.715 22.685 40.004a32.327 32.327 0 01-1.292 3.841c12.531 10.766 29.06 15.923 47.101 15.764a50.129 50.129 0 01-6.18-3.67c-32.23-22.483-37.617-81.287-12.056-131.35C98.8 46.153 118.607 27.28 139 19zM32.548 154.935C18.76 151.24 4.585 159.421.89 173.223c-3.706 13.79 4.486 27.97 18.272 31.664 13.8 3.695 27.976-4.487 31.67-18.288 3.693-13.79-4.487-27.97-18.285-31.664z"
      ></path>
      <path
        fill="#F9CE69"
        d="M256.215 135.474c-9.187-40.398-33.272-71.95-61.347-85.176-12.824 12.42-33.358 12.31-46.035-.354a34.405 34.405 0 01-2.672-3.038c-15.606 5.466-28.344 17.215-37.238 32.93a50.31 50.31 0 016.271-3.513c35.615-16.692 89.288 8.052 119.889 55.271 16.386 25.293 22.828 51.903 19.802 73.731 6.101-20.632 6.991-44.961 1.33-69.851zm-65.886-90.435c10.115-10.103 10.115-26.489 0-36.591-10.103-10.103-26.489-10.103-36.591 0-10.103 10.102-10.103 26.488 0 36.59 10.102 10.103 26.488 10.103 36.591 0z"
      ></path>
    </svg>
  );
}

export default Logo;
