import { formatDate } from "../../../utils/formatDate";
import { Collapse } from "antd";

const BackendInterviewQuestion = () => {
  const backendQuestion = [
    {
      id: 1,
      title: (
        <div className="">
          What are the different languages present in DBMS?
        </div>
      ),
      answer: (
        <>
          <p className="font-bold mb-5">
            The four types of DBMS languages are as follows:
          </p>
          <ul className="list-disc space-y-4">
            <li>
              <span className="font-bold">
                Data Manipulation Language (DML)
              </span>{" "}
              : It is used to manipulate the data and consists of the command
              for the same. E.g.: SELECT, INSERT, DELETE, UPDATE, etc.
            </li>
            <li>
              <span className="font-bold">Data Definition Language (DDL)</span>{" "}
              : It is used to define and update the data. E.g.: TRUNCATE, ALTER,
              DROP, CREATE, RENAME, etc.
            </li>
            <li>
              <span className="font-bold">Data Control Language (DCL)</span> :
              It is used to control the access to the data. E.g.: GRANT, REVOKE,
              etc.
            </li>
            <li>
              <span className="font-bold">
                Transaction Control Language (TCL)
              </span>{" "}
              : It is used to handle the data transactions. E.g.: COMMIT,
              ROLLBACK, etc.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Ôn tập backend
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {formatDate(new Date(2024, 11, 15).toString())}
          </p>
        </div>

        <div className="w-full">
          {backendQuestion.map((question) => (
            <Collapse
              className="w-full"
              size="large"
              
              items={[
                {
                  key: question.id.toString(),
                  label: (
                    <div className="font-bold text-2xl">{question.title}</div>
                  ),
                  children: (
                    <div className="text-xl mx-5">{question.answer}</div>
                  ),
                },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackendInterviewQuestion;
