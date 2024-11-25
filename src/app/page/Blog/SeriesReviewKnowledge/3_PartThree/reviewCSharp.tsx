import CodeDisplay from "../../../../component/ui/code_display";
import {
  TextBold,
  TextCode,
  TitleBold,
} from "../../../../component/ui/text-bold";
import { ReviewKnowledgeViewModel } from "../../../../models/Blogs";

export const CSharpQuestion: ReviewKnowledgeViewModel[] = [
  {
    id: 1,
    title: "How is C# different from C",
    answer: (
      <p className="mb-3">
        You would always know C being the procedural language while C# is a more
        object-oriented language. The biggest difference is that C# supports
        automatic garbage collection by Common Language Runtime (CLR) while C
        does not. C# primarily needs a <TextBold>.NET framework</TextBold> to
        execute while C is a platform-agnostic language.
      </p>
    ),
  },
  {
    id: 2,
    title: "What is inheritance? Does C# support multiple inheritance?",
    answer: (
      <>
        <p className="mb-3">
          Inheritance means acquiring some of the properties from a master
          class.
          <img
            src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/037/original/Multiple-inheritance_in_C_.png?1614674250"
            alt="inheritance"
            className="w-1/2"
          />
        </p>
        <p>
          <CodeDisplay
            code={`// C# program to illustrate
// multiple class inheritance
using System;
using System.Collections;

// Parent class 1
class Scaler {

  // Providing the implementation
  // of features() method
  public void features()
  {
      // Creating ArrayList
      ArrayList My_features= new ArrayList();

      // Adding elements in the
      // My_features ArrayList
      My_features.Add("Abstraction");
      My_features.Add("Encapsulation");
      My_features.Add("Inheritance");

      Console.WriteLine("Features provided by OOPS:");
      foreach(var elements in My_features)
      {
          Console.WriteLine(elements);
      }
  }
}

// Parent class 2
class Scaler2 :Scaler {

  // Providing the implementation
  // of courses() method
  public void languages()
  {
      // Creating ArrayList
      ArrayList My_features = new ArrayList();

      // Adding elements in the
      // My_features ArrayList
      My_features.Add("C++");
      My_features.Add("C#");
      My_features.Add("JScript");
     

      Console.WriteLine("Languages that use OOPS concepts:");
      foreach(var elements in My_features)
      {
          Console.WriteLine(elements);
      }
  }
}

// Child class
class ScalertoScaler : Scaler2 {
}

public class Scaler1 {

  // Main method
  static public void Main()
  {
      // Creating object of ScalertoScaler class
      ScalertoScaler obj = new ScalertoScaler();
      obj.features();
      obj.languages();
  }
}`}
            language="csharp"
          />
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "What is the difference between an Array and ArrayList in C#?",
    answer: (
      <>
        <p className="mb-3">
          An array is a collection of similar variables clubbed together under
          one common name. While ArrayList is a collection of objects that can
          be indexed individually. With ArrayList you can access a number of
          features like dynamic memory allocation, adding, searching, and
          sorting items in the ArrayList.
        </p>
        <ul className="list-disc ml-5">
          <li>
            When declaring an array the size of the items is fixed therefore,
            the memory allocation is fixed. But with ArrayList, it can be
            increased or decreased dynamically.
          </li>
          <li>
            Array belongs to system.array namespace while ArrayList belongs to
            the system.collection namespace.
          </li>
          <li>
            All items in an array are of the same datatype while all the items
            in an ArrayList can be of the same or different data types.
          </li>
          <li>
            While arrays cannot accept null, ArrayList can accept null values.
          </li>
        </ul>
        <p>
          <CodeDisplay
            code={`// C# program to illustrate the ArrayList
using System;
using System.Collections;
 
class IB {
 
   // Main Method
   public static void Main(string[] args)
   {
 
       // Create a list of strings
       ArrayList al = new ArrayList();
       al.Add("Bruno");
       al.Add("Husky");
       al.Add(10);
       al.Add(10.10);
 
       // Iterate list element using foreach loop
       foreach(var names in al)
       {
           Console.WriteLine(names);
       }
   }
}`}
            language="csharp"
            output={`Bruno
Husky
10
10.1`}
          />
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "What are extension methods in C#?",
    answer: (
      <>
        <p className="mb-3">
          Extension methods in C# are a feature that allows you to "add" new
          methods to an existing class or interface without modifying its source
          code or creating a new derived class. They are a type of static method
          that is called as if it were an instance method on the extended type.
        </p>
        <p className="mb-3">
          <TitleBold>Key Characteristics of Extension Methods:</TitleBold>
          <ul className="list-decimal ml-5">
            <li>
              Static Methods: They are declared in static classes and marked as
              static methods.
            </li>
            <li>
              <TextCode>this</TextCode>
              Keyword: The first parameter of an extension method specifies the
              type it operates on, preceded by the <TextCode>
                this
              </TextCode>{" "}
              keyword. This indicates the type being extended.
            </li>
            <li>
              Non-Intrusive: They don’t actually modify the type; they are just
              syntactic sugar to make the method appear as if it is a member of
              the type.
            </li>
            <li>
              Discoverable: They are accessible via IntelliSense (in IDEs like
              Visual Studio) when working with the extended type.
            </li>
          </ul>
        </p>
        <hr />
        <p className="mb-3">
          <TitleBold>Syntax of an Extension Method</TitleBold>
          <CodeDisplay
            code={`public static class MyExtensions
{
    public static int WordCount(this string str)
    {
        if (string.IsNullOrWhiteSpace(str)) return 0;
        return str.Split(new char[] { ' ', '\\t', '\\n' }, StringSplitOptions.RemoveEmptyEntries).Length;
    }
}`}
            language="csharp"
          />
          <TitleBold>Explanation:</TitleBold>
          <ul className="list-disc ml-5">
            <li>
              <TextCode>this string str</TextCode>: Indicates that the method{" "}
              <TextCode>WordCount</TextCode> is extending the{" "}
              <TextCode>string</TextCode> class.
            </li>
            <li>
              This method can now be called as if it were a member of the{" "}
              <TextCode>string</TextCode> class.
            </li>
          </ul>
        </p>
        <hr />
        <p className="mb-3">
          <TitleBold>Using Extension Methods</TitleBold>
          <CodeDisplay
            code={`class Program
{
    static void Main()
    {
        string sentence = "Hello world, welcome to extension methods!";
        int wordCount = sentence.WordCount(); // Call the extension method
        Console.WriteLine($"Word count: {wordCount}");
    }
}`}
            language="csharp"
            output="Word count: 6"
          />
        </p>
        <hr />
        <p className="mb-3">
          <TitleBold>Benefits of Extension Methods:</TitleBold>
          <ul className="list-decimal">
            <li>
              <TextBold>Enhance Readability:</TextBold> They make code more
              intuitive, as the method appears as part of the type.{" "}
            </li>
            <li>
              <TextBold>Non-Invasive:</TextBold> They don’t require altering
              existing classes, making them useful for adding functionality to
              classes you don’t own (e.g., .NET framework classes).
            </li>
            <li>
              <TextBold>Reuse and Modularity:</TextBold> They promote
              reusability by encapsulating additional functionality in reusable
              static methods.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "What is the difference between an abstract class and an interface?",
    answer: (
      <>
        <p className="mb-3">
          <TitleBold>Abstract Class:</TitleBold>
          <ul className="ml-5 list-disc">
            <li>
              Can have <TextBold>fields</TextBold> and{" "}
              <TextBold>constructors</TextBold>.
            </li>
            <li>
              Can contain <TextBold>implemented methods</TextBold> (non-abstract
              methods with a body).
            </li>
            <li>
              Supports <TextBold>access modifiers</TextBold> for methods and
              properties.
            </li>
            <li>
              A class can <TextBold>inherit only one</TextBold> abstract class.
            </li>
          </ul>
        </p>
        <hr />
        <p className="mb-3">
          <TitleBold>Interface:</TitleBold>
          <ul className="ml-5 list-disc">
            <li>
              Cannot have fields or constructors; it’s purely a contract for
              implementing members.
            </li>
            <li>
              All members are{" "}
              <TextBold>implicitly public and abstract</TextBold> (no
              implementation).
            </li>
            <li>
              A class can <TextBold>implement multiple</TextBold> interfaces.
            </li>
          </ul>
        </p>
        <hr />
        <p className="mb-3">
          <TitleBold>Abstract class example:</TitleBold>
          <CodeDisplay
            code={`using System;

abstract class Animal
{
    public string Name { get; set; }

    public Animal(string name)
    {
        Name = name;
    }

    // Abstract method (no implementation)
    public abstract void Speak();

    // Non-abstract method (with implementation)
    public void Eat()
    {
        Console.WriteLine($"{Name} is eating.");
    }
}

class Dog : Animal
{
    public Dog(string name) : base(name) { }

    // Implementing the abstract method
    public override void Speak()
    {
        Console.WriteLine($"{Name} says: Woof!");
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog("Buddy");
        dog.Speak();
        dog.Eat();
    }
}`}
            language="csharp"
            output={"Buddy says: Woof!\nBuddy is eating."}
          />

          <TitleBold>Interface Example:</TitleBold>
          <CodeDisplay
            code={`using System;

interface IAnimal
{
    // Interface members are implicitly public and abstract
    void Speak();
    void Eat();
}

class Cat : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Meow!");
    }

    public void Eat()
    {
        Console.WriteLine("Cat is eating.");
    }
}

class Program
{
    static void Main()
    {
        IAnimal cat = new Cat();
        cat.Speak();
        cat.Eat();
    }
}`}
            language="csharp"
            output={"Meow!\nCat is eating."}
          />
        </p>
      </>
    ),
  },
];
