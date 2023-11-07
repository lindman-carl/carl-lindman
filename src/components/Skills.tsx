const MissingMedal = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-content-text">
      <path
        strokeDasharray={2}
        strokeWidth={0.5}
        fill="none"
        d="M4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 11.2254 18.812 13.2317 17.3098 14.6452C17.3359 14.6939 17.357 14.7462 17.3722 14.8017L18.0217 17.1709C18.3252 18.2776 18.5696 19.169 18.6807 19.8607C18.7897 20.5387 18.812 21.2371 18.4326 21.8048C18.2166 22.128 17.9233 22.3927 17.5766 22.5692C16.9468 22.8899 16.2599 22.7318 15.6446 22.4995C15.017 22.2625 14.2288 21.8518 13.2607 21.3474L13.2141 21.3231C12.4899 20.9457 12.3008 20.861 12.1191 20.8417C12.0399 20.8332 11.9601 20.8332 11.8809 20.8417C11.6992 20.861 11.5101 20.9457 10.7859 21.3231L10.7393 21.3474C9.77122 21.8518 8.98303 22.2625 8.35539 22.4995C7.74006 22.7318 7.0532 22.8899 6.42341 22.5692C6.07674 22.3927 5.78341 22.128 5.56741 21.8048C5.188 21.2371 5.21031 20.5387 5.31926 19.8607C5.43043 19.169 5.67482 18.2776 5.97827 17.1709L6.6278 14.8017C6.64302 14.7462 6.66409 14.6939 6.69015 14.6452C5.18798 13.2317 4.25 11.2254 4.25 9Z"
      ></path>
    </svg>
  );
};

const Skills = () => {
  return (
    <section className="mt-8 w-full max-w-[65ch]">
      <h2 className="mb-2 text-2xl font-black text-content-text">skilled</h2>
      <ul className="leading-10">
        <li className="text-content-text">
          <span className="font-bold">Proficient in</span>&nbsp;
          <span>JavaScript/TypeScript, CSS, C#, Python</span>
        </li>
        <li className="flex w-full items-center text-content-text">
          <MissingMedal />
          &nbsp;
          <span className="font-bold">Azure Developer Associate - AZ-204</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

// const FullMedal = () => {
//   return (
//     <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-content-text">
//       <path
//         strokeDasharray={2}
//         strokeWidth={0.5}
//         fill="none"
//         d="M12 2.75C8.54822 2.75 5.75 5.54822 5.75 9C5.75 12.4518 8.54822 15.25 12 15.25C15.4518 15.25 18.25 12.4518 18.25 9C18.25 5.54822 15.4518 2.75 12 2.75ZM4.25 9C4.25 4.71979 7.71979 1.25 12 1.25C16.2802 1.25 19.75 4.71979 19.75 9C19.75 11.2254 18.812 13.2317 17.3098 14.6452C17.3359 14.6939 17.357 14.7462 17.3722 14.8017L18.0217 17.1709C18.3252 18.2776 18.5696 19.169 18.6807 19.8607C18.7897 20.5387 18.812 21.2371 18.4326 21.8048C18.2166 22.128 17.9233 22.3927 17.5766 22.5692C16.9468 22.8899 16.2599 22.7318 15.6446 22.4995C15.017 22.2625 14.2288 21.8518 13.2607 21.3474L13.2141 21.3231C12.4899 20.9457 12.3008 20.861 12.1191 20.8417C12.0399 20.8332 11.9601 20.8332 11.8809 20.8417C11.6992 20.861 11.5101 20.9457 10.7859 21.3231L10.7393 21.3474C9.77122 21.8518 8.98303 22.2625 8.35539 22.4995C7.74006 22.7318 7.0532 22.8899 6.42341 22.5692C6.07674 22.3927 5.78341 22.128 5.56741 21.8048C5.188 21.2371 5.21031 20.5387 5.31926 19.8607C5.43043 19.169 5.67482 18.2776 5.97827 17.1709L6.6278 14.8017C6.64302 14.7462 6.66409 14.6939 6.69015 14.6452C5.18798 13.2317 4.25 11.2254 4.25 9ZM7.96016 15.6151L7.43755 17.5213C7.11851 18.685 6.89691 19.4973 6.80026 20.0987C6.69985 20.7235 6.7747 20.9117 6.81454 20.9713C6.89239 21.0878 6.99326 21.1761 7.10403 21.2325C7.12687 21.2441 7.27015 21.3058 7.82563 21.0961C8.35876 20.8949 9.06684 20.5274 10.0928 19.9928C10.1276 19.9747 10.1621 19.9567 10.1962 19.9389C10.7642 19.6421 11.2211 19.4035 11.722 19.3501C11.9068 19.3304 12.0932 19.3304 12.278 19.3501C12.7789 19.4035 13.2358 19.6421 13.8038 19.9389C13.8379 19.9567 13.8724 19.9747 13.9072 19.9928C14.9332 20.5274 15.6412 20.8949 16.1744 21.0961C16.7299 21.3058 16.8731 21.2441 16.896 21.2325C17.0067 21.1761 17.1076 21.0878 17.1855 20.9713C17.2253 20.9117 17.3002 20.7235 17.1997 20.0987C17.1031 19.4973 16.8815 18.685 16.5625 17.5213L16.0398 15.6151C14.8635 16.335 13.4802 16.75 12 16.75C10.5198 16.75 9.13652 16.335 7.96016 15.6151Z"
//       ></path>
//     </svg>
//   );
// };
