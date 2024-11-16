import { TextBold, TitleBold } from "../component/ui/text-bold";
import { ReviewKnowledgeViewModel } from "../models/Blogs";

export const backendQuestion: ReviewKnowledgeViewModel[] = [
  {
    id: 1,
    title: "What are the different languages present in DBMS?",
    answer: (
      <>
        <TitleBold className="mb-5">
          The four types of DBMS languages are as follows:
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Data Manipulation Language (DML)</TextBold> : It is used
            to manipulate the data and consists of the command for the same.
            E.g.: SELECT, INSERT, DELETE, UPDATE, etc.
          </li>
          <li>
            <TextBold>Data Definition Language (DDL)</TextBold> : It is used to
            define and update the data. E.g.: TRUNCATE, ALTER, DROP, CREATE,
            RENAME, etc.
          </li>
          <li>
            <TextBold>Data Control Language (DCL)</TextBold> : It is used to
            control the access to the data. E.g.: GRANT, REVOKE, etc.
          </li>
          <li>
            <TextBold>Transaction Control Language (TCL)</TextBold> : It is used
            to handle the data transactions. E.g.: COMMIT, ROLLBACK, etc.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "What are ACID properties?",
    answer: (
      <>
        <TitleBold className="mb-5">
          ACID properties are a set of properties that ensure reliable and
          secure transactions among databases. To maintain data consistency,
          ACID properties are followed. ACID stands for Atomicity, Consistency,
          Isolation, Durability.
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Atomicity</TextBold> : Either the entire transaction takes
            place at once or not at all.
          </li>
          <li>
            <TextBold>Consistency</TextBold> : The database must be consistent
            before and after a transaction
          </li>
          <li>
            <TextBold>Isolation</TextBold> : No other transaction can alter the
            data during a transaction is in progress
          </li>
          <li>
            <TextBold>Durability</TextBold> : The transactions made should be
            durable and must persist
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title:
      "What is normalization? Explain the different types of normal forms.",
    answer: (
      <>
        <TitleBold className="mb-5">
          Normalization is the technique that reduces data redundancy and
          eliminates insertion, updation and deletion anomalies. Normalization
          is the process of dividing the larger table into smaller tables and
          linking them through relationships. It is the process of organizing
          data in a database.
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold className="font-bold">Insertion Anomaly</TextBold>:
            Insertion Anomaly is when one cannot insert a new tuple into a
            relationship due to lack of data.N
          </li>
          <li>
            <TextBold className="font-bold">Deletion Anomaly</TextBold>: Delete
            anomaly is where the deletion of data results in the unintended loss
            of some other important data.N
          </li>
          <li>
            <TextBold className="font-bold">Updation Anomaly</TextBold>:
            Updation anomaly is when an update of a single data value requires
            multiple rows of data to be updated.
          </li>
        </ul>
        <TitleBold className=" my-5">
          Different types of normal forms:
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>1NF</TextBold>: It is known as the first normal form. A
            relation is said to be in 1NF if it contains an atomic value.
          </li>
          <li>
            <TextBold>2NF</TextBold>: It is known as the second normal form. A
            relation is said to be in 2NF if it is in 1NF and each non-prime
            attribute is fully functionally dependent on the primary key
          </li>
          <li>
            <TextBold>3NF</TextBold>: It is known as the third normal form. A
            relation is said to be in 3NF if it is in 2NF and there is no
            transitive dependency.
          </li>
          <li>
            <TextBold>BCNF</TextBold>: It is known as Boyce Codd Normal Form
            which is a strict version of 3NF. A relation is said to be in BCNF
            if it is in 3NF and for every functional dependency X-&gt;Y, X is a
            super key of the table. It is also called the 3.5 Normal Form.
          </li>
          <li>
            <TextBold>4NF</TextBold>: It is known as the fourth normal form. A
            relation is said to be in 4NF if it is in BCNF and there is no
            multivalued dependency in the table.
          </li>
          <li>
            <TextBold>5NF</TextBold>: It is known as the fifth normal form. A
            relation is said to be in 5NF if it is in 4NF and it cannot be
            further decomposed into smaller tables.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "What is an ER diagram?",
    answer: (
      <>
        <p className="mb-5">
          ER diagrams stand for Entity Relationship Diagram. It is a diagram
          that displays the different entities and the relationship among them
          stored inside the database.
        </p>
        <p className="mb-5">
          ER diagram provides a logical structure of the database. Creating an
          ER diagram for the database is a standardized procedure and is done
          before implementing the database.
        </p>
        <p className="mb-5">ER diagram is based on three concepts:</p>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Entities</TextBold>: It can be defined as an object having
            some properties. They are represented using rectangles. Eg: Car
          </li>
          <li>
            <TextBold>Attributes</TextBold>: The properties of an entity are
            called attributes. They are represented using ellipses. Eg: Car
            name, car mileage, car type, etc
          </li>
          <li>
            <TextBold>Relationships</TextBold>: Relationships are how the
            entities are related to each other. They are represented using
            lines.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title:
      "Give the resulting tables arising from applying Joins on the following tables in SQL",
    answer: (
      <>
        <div>
          <TitleBold className="mt-0">Employees Table:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731747638/BlogImage/kjdosxkv4mprdqw73iug.png"
            alt=""
          />

          <TitleBold>Departments Table:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731747726/BlogImage/jwrg7d8yd0rjwi3eprjc.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Inner Join:</TitleBold>
          <ul className="list-disc space-y-2">
            <li>Returns only the rows with matching values in both tables.</li>
            <li>Filters out rows with no match.</li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749550/BlogImage/fijlhgkhppgqw3vxrwre.png"
            alt=""
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749717/BlogImage/fuv25t5unw6go6a6bwgo.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Left Join (Left Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows from the left table and the matched rows from the
              right table.
            </li>
            <li>
              If there is no match in the right table, NULL values are returned.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749917/BlogImage/fqf3ecusm3pzmxv3ijjf.png"
            alt=""
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749717/BlogImage/fuv25t5unw6go6a6bwgo.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Right Join (Right Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows from the right table and the matched rows from
              the left table.
            </li>
            <li>
              If there is no match in the left table, NULL values are returned.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750127/BlogImage/ndekdpdtpgkjxyneyr7z.png"
            alt=""
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750187/BlogImage/gn9uyq7ox4hdnqurdl8l.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Full Join (Full Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows when there is a match in either the left or right
              table.
            </li>
            <li>
              Includes rows with no match in either table with NULL values.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750473/BlogImage/zitgjx2t8jilymxuffkr.png"
            alt=""
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750187/BlogImage/gn9uyq7ox4hdnqurdl8l.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Other Types of JOIN: </TitleBold>
          <p>
            Apart from INNER JOIN and OUTER JOIN, there are some other types of
            JOIN that are less commonly used:
          </p>
          <ul className="list-disc space-y-2">
            <li>
              <TextBold>SELF JOIN</TextBold>: A table is joined with itself.
            </li>
            <li>
              <TextBold>NATURAL JOIN</TextBold>: Similar to INNER JOIN, but it
              does not require specifying the condition with ON. Instead, it
              automatically links based on matching column names. NATURAL JOIN
              is supported in PostgreSQL.
            </li>
            <li>
              <TextBold>LEFT JOIN EXCLUDE / RIGHT JOIN EXCLUDE</TextBold>:
              Performs a LEFT JOIN or RIGHT JOIN but excludes the INNER JOIN
              portion. In practice, these are not separate types of JOIN; you
              can easily achieve this by adding a WHERE Key IS NULL condition to
              filter out common records.
            </li>
            <li>
              <TextBold>FULL JOIN EXCLUDE</TextBold>: Performs a FULL JOIN and
              excludes the INNER JOIN portion. This is handled similarly to the
              types above.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
