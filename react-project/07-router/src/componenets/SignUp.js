import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onVaild = (data) => {
    console.log("성공", data);
  };

  const onInvaild = (err) => {
    console.log("실패", err);
  };

  const genderRegister = register("gender", {
    required: "성별은 필수값입니다",
  });

  console.log(watch("ID"));

  return (
    <>
      <h4>react hook form 테스트</h4>
      {/* handleSubmit(onVaild[, onInvaild]) */}
      {/* onVaild : 폼을 정상적으로 제출할 수 있는 상태일 때 실행시킬 함수 */}
      {/* onInvaild : (선택값) 폼을 제출할 수 없을 때 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {errors.ID?.message}
        <br />
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            // minLength: 2,
            minLength: {
              value: 2, // 최소값 지정
              message: "이름은 두 글자 이상 입력해야 합니다.",
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            // pattern:
            //   /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
            pattern: {
              value:
                /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
              message: "올바른 형태의 이메일을 입력해주세요.",
            },
            validate: (v) =>
              v.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
          })}
        />
        {errors.email?.message}
        <br />
        <label htmlFor="genter-men">
          <input type="radio" value="남" id="genter-men" {...genderRegister} />{" "}
          남
        </label>
        <label htmlFor="genter-women">
          <input
            type="radio"
            value="여"
            id="genter-women"
            {...genderRegister}
          />{" "}
          여
        </label>{" "}
        {errors.gender?.message}
        <br />
        <select {...register("option", { required: "옵션은 필수값입니다." })}>
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
        </select>
        {errors.option?.message}
        <br />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
