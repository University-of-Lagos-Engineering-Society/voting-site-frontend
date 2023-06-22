import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const SuccessModal = ({ isOpen, closeModal }: Props) => {
  const router = useRouter();
  const handleVerify = (e: any) => {
    e.preventDefault();
    router.push("/categories");
    closeModal();
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModal();
            router.push("/categories");
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#C5D5FD26] bg-opacity-30 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto sat-norm">
            <div className="flex min-h-full items-center justify-center p-4 text-center gap-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col gap-6  max-w-md transform overflow-hidden rounded-2xl bg-[#2E2E2E] px-6 py-20 text-left align-middle shadow-xl transition-all">
                  {/* exclamation icon */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-full mx-auto">
                    <div className="flex w-full items-center">
                      <svg
                        width="120"
                        height="113"
                        viewBox="0 0 120 113"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M120 56.2329L106.691 41.2877L108.545 21.504L88.8546 17.0957L78.5455 0L60 7.84896L41.4545 0L31.1455 17.0957L11.4545 21.4502L13.3091 41.2339L0 56.2329L13.3091 71.1782L11.4545 91.0156L31.1455 95.424L41.4545 112.52L60 104.617L78.5455 112.466L88.8546 95.3702L108.545 90.9619L106.691 71.1782L120 56.2329ZM49.0909 83.1129L27.2727 61.6089L34.9636 54.0288L49.0909 67.8988L85.0364 32.471L92.7273 40.1049L49.0909 83.1129Z"
                          fill="#25B360"
                        />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-2xl sat-norm text-white text-center max-w-[200px] mx-auto">
                    You have voted successfully
                  </h1>

                  <div className="flex flex-col gap-4 items-center w-full max-w-[300px] mx-auto my-8">
                    <Link
                      href="/categories"
                      className="w-full bg-[#c7291f] text-white font-bold rounded-full flex justify-center items-center gap-1 px-12 py-3"
                    >
                      Vote again
                    </Link>
                    <a
                      href="https://wa.link/3tapha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-[#c7291f] font-bold text-[#c7291f] flex justify-center items-center gap-1 px-12 py-3 rounded-full"
                    >
                      Buy Tickets
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SuccessModal;
