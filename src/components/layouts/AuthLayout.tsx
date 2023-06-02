import { FC, ReactNode } from "react";
import { APP_VERSION } from "constants/config";
import { useAuthState } from "hooks/redux/auth";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { hasError } = useAuthState();

  return (
    <div className="h-screen flex md:flex-row flex-col">
      <div className="relative bg-blue-dark md:w-1/2 w-full md:h-full h-1/4">
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid grid-cols-6 gap-4 sm:px-16 md:px-8">
            <img src="/assets/images/shape-1.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
            <img src="/assets/images/shape-2.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
            <img src="/assets/images/shape-3.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
            <img src="/assets/images/shape-4.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
            <img src="/assets/images/shape-5.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
            <img src="/assets/images/shape-1.png" alt="shape" className="md:col-span-3 col-span-1 w-10 sm:w-12 md:w-20 lg:w-full h-10 sm:h-12 md:h-20 lg:h-full" />
          </div>
          {
            hasError && 
            <p className="absolute bottom-[20%] text-center text-yellow w-full text-center">
              Something went wrong.
            </p>
          }
          <p className="absolute bottom-0 text-center text-white mb-4 w-full text-center">
            Version {APP_VERSION}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:h-full h-3/4 bg-yellow flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout;
