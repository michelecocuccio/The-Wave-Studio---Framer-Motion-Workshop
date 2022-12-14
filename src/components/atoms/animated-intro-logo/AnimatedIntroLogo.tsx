import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const draw = {
  hidden: { pathLength: 0, opacity: 0, fill: '#007fae', strokeWidth: 0.5 },
  visible: {
    pathLength: 1,
    opacity: 1,
    strokeWidth: 0,
    fill: '#fff',
    transition: {
      pathLength: { type: 'tween', duration: 2, bounce: 0 },
      fill: { delay: 1.8, duration: 0.3 },
      strokeWidth: { delay: 1.8, duration: 0.3 },
      opacity: { duration: 0.6 },
    },
  },
};

export const AnimatedIntroLogo = ({
  className,
  setSelectedNavItem,
}: {
  className?: string;
  setSelectedNavItem: React.Dispatch<
    React.SetStateAction<{
      label: string;
      href: string;
    } | null>
  > | null;
}) => {
  return (
    <Link href="/" onClick={() => setSelectedNavItem?.(null)}>
      <div className={className}>
        <motion.svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          viewBox="0 0 40 40"
          initial="hidden"
          animate="visible"
          className="w-[6rem] h-[6rem] mr-auto"
        >
          <motion.g fill="none" stroke="#fff" strokeWidth={0.5}>
            <motion.path
              variants={draw}
              d="M2.87 21.08c-.324-.174-.498-.462-.498-.786V2.805c-.625-.08-1.25-.185-1.863-.3C.174 2.447 0 2.24 0 1.916V.496C0 .173.174 0 .498 0h6.27c.325 0 .498.23.498.67v1.87c0 .427-.173.646-.497.635a49.048 49.048 0 0 1-1.863-.093V21.46c0 .335-.174.45-.498.335a15.31 15.31 0 0 1-1.538-.716ZM14.301 21.391c-.324.116-.497-.011-.497-.335v-8.438c-.926.23-1.863.427-2.789.554v8.588c0 .335-.173.543-.497.59-.51.069-1.03.126-1.54.15-.323.01-.497-.162-.497-.497V.68C8.47.231 8.643 0 8.967 0h1.54c.323 0 .497.23.497.658v9.674a29.242 29.242 0 0 0 2.788-.462V.612c0-.404.174-.624.498-.624h1.539c.324 0 .497.208.497.578V20.11c0 .323-.173.577-.497.704a24.4 24.4 0 0 1-1.528.577ZM18.825 19.556c-.324.138-.497.046-.497-.277V.53c0-.346.173-.531.497-.531h5.832c.324 0 .498.139.498.392v1.132c0 .254-.174.415-.498.438-1.261.104-2.522.231-3.784.358v5.645c1.204-.346 2.407-.692 3.61-.992.325-.081.498.034.498.311v1.259c0 .288-.174.496-.498.588-1.203.358-2.406.774-3.61 1.19v5.91a65.164 65.164 0 0 1 3.784-1.547c.324-.115.498-.012.498.3v1.385c0 .324-.174.555-.498.67-1.944.75-3.888 1.662-5.832 2.517Z"
            />
            <motion.path
              variants={draw}
              d="M12.75 39.654c-.022.23-.196.334-.52.334H9.57c-.324 0-.498-.092-.52-.311-.545-3.29-1.1-7.192-1.644-11.81-.544 4.525-1.076 8.381-1.62 11.798-.023.22-.196.324-.52.324H2.603c-.324 0-.497-.127-.52-.405C1.4 34.517.74 28.167.069 21.553c-.023-.347.15-.381.475-.116.509.427 1.03.797 1.539 1.12.324.208.497.45.52.785.452 4.94.915 9.478 1.366 13.333.532-3.694 1.064-7.63 1.597-12.132.023-.312.196-.416.52-.347.868.173 1.747.243 2.615.231.324-.011.498.127.52.439A338.99 338.99 0 0 0 10.82 36.94c.45-3.567.914-7.78 1.365-12.537.023-.323.197-.508.52-.6.51-.139 1.03-.3 1.54-.473.324-.116.497.023.474.346-.636 6.153-1.296 11.625-1.967 15.977ZM21.614 40c-.324 0-.497-.162-.52-.496-.15-1.305-.301-2.586-.452-3.845-.937.162-1.874.324-2.811.474-.15 1.177-.301 2.332-.452 3.44-.023.288-.196.415-.52.415h-1.54c-.323 0-.497-.15-.45-.415.81-4.756 1.63-10.655 2.44-16.97.024-.335.198-.554.522-.693.925-.404 1.863-.82 2.788-1.235.324-.15.498-.069.544.231.81 5.668 1.631 11.556 2.441 18.482.047.37-.127.6-.45.6-.51.012-1.02.012-1.54.012Zm-2.383-15.792c-.37 3.301-.753 6.545-1.123 9.628l2.245-.555a6648.8 6648.8 0 0 0-1.122-9.073ZM29.714 39.377c-.023.427-.197.623-.521.623h-2.789c-.323 0-.497-.185-.52-.589a690.637 690.637 0 0 0-2.222-19.51c-.046-.31.128-.576.451-.703.51-.197 1.03-.393 1.54-.566.323-.115.497-.012.52.312a766.8 766.8 0 0 1 1.62 16.981c.532-6.442 1.064-12.444 1.597-17.755.023-.335.196-.508.52-.554.51-.058 1.03-.092 1.54-.104.323 0 .497.208.45.543-.728 6.13-1.457 13.322-2.186 21.322ZM33.67 40c-.323 0-.497-.23-.497-.658V18.124c0-.335.174-.485.498-.427 1.944.346 3.888 1.224 5.831 2.84.325.265.498.6.498.923v1.42c0 .323-.173.335-.498.081-1.26-1.027-2.522-1.743-3.783-2.205v6.315c1.203.37 2.407.912 3.61 1.685.324.208.498.508.498.831v1.432c0 .323-.174.392-.498.22a15.567 15.567 0 0 0-3.61-1.41V37c1.261.103 2.522.277 3.783.519.325.058.498.277.498.6v1.42c0 .323-.173.497-.498.497C37.56 40 35.615 40 33.671 40Z"
            />
          </motion.g>
        </motion.svg>
      </div>
    </Link>
  );
};
