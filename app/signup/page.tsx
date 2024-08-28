import Button from "@/app/ui/Button";
import Image from "next/image";

export default function Page() {
  return (
    <main
      className="flex justify-center items-center flex-col h-screen"
      style={{ background: "linear-gradient(180deg, #ecfdf5, #f0fdf4, #ffffff,#ffffff)" }}>
      <div className="flex-grow-1 flex justify-center items-center h-full flex-col gap-14 w-full">
        <div className="w-full font-bold text-xl flex justify-center items-center flex-col gap-2">
          <Image src="/logo.png" width={60} height={60} alt="logo" />
          <div>나의 특별한 하루</div>
        </div>

        <form action="" className="w-full max-w-sm flex justify-center flex-col gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-semibold">
              이메일
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 ring-1 ring-slate-200"
            />
          </div>
          <Button submit color="green">
            계정에 로그인하세요
          </Button>
          <Button color="link">비밀번호를 잊으셨나요?</Button>
        </form>
      </div>
      <div className="flex gap-4 p-4 items-center">
        <div>계정이 없으신가요?</div>
        <Button>가입하기</Button>
      </div>
    </main>
  );
}
