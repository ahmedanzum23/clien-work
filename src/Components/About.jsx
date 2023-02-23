import React from "react";
import profile from "../assets/profile.png";

function About() {
  return (
    <div name="about" className="h-full w-full   pt-[4.5rem]">
      <h2 className="text-center text-4xl font-bold underline underline-offset-8">
        About Me
      </h2>
      <div className="flex w-full flex-col items-center   gap-x-[10rem] py-10 px-[10rem]">
        <div className="grid aspect-square  h-[16rem] place-items-center   shadow-3xl">
          <img className="h-full bg-cover" src={profile} alt="" />
        </div>
        <div className="py-10">
          <h3 className="text-center text-4xl font-semibold">Muhammad Musa</h3>
          <p className="mt-4  text-center font-secondText text-sm font-normal text-gray-600">
            Muhammad Musa is the kind of man of whom legendary tales of bravery
            and patriotism are told to future generations. The second son of
            award-winning teacher, celebrated raconteur and scholar Moulavi
            Ahmed Ali, he was born on October 30, 1951 at Satkhira, Bangladesh.
            As a student at Chittagong University in 1970-71, he first showed
            great promise in writing and in all matters that affected his
            beloved nation and became the reporter of Daily Azadi of Chittagong
            and the official university correspondent of Ittefaq then and now,
            the most highly-respected and largest circulating national daily
            newspaper in Bangladesh. It was on March 26, 1971, he answered the
            patriotic call of his occupied and suppressed nation, and the
            impassioned plea of Bangabandhu Sheikh Mujibur Rahman the father of
            the Bengalee nation. Mr. Musa joined and actively participated in
            the Liberation War in Sector 9 at the beginning. He made his name as
            a valiant Freedom Fighter in various war fields and earned the
            admiration of the Sector Commanders and fellow Freedom Fighters.
            Later, considering his journalistic background the Government of
            Bangladesh-in-exile appointed him War Correspondent of the
            Liberation Radio of Bangladesh, popularly known as 'Swadhin Bangla
            Betar Kendra'. Musa was also attached with the then Acting President
            of exile Government, moved with the Allied Forces (Indian Arm
            Forces) and Muktibahini (freedom fighters) and reported on their
            activities to the vast listening audience, which radio enjoyed in
            those days. His dispatches from the war fronts were both
            morale-boosting and inspirational for the people, then under the
            occupation of the Pakistan forces, and were eagerly awaited by all.
            Broadcasts of his two weekly features "Ranangan Ghure Elam" (on
            return from the war field) and "Muktanchal Ghure Elam" (from the
            liberated areas) became compelling listening for both young and old,
            the main topic of tea-room social discussions across Bangladesh
            (then known as East Pakistan) and a vital source of valuable
            information on the war for governments worldwide. As War
            Correspondent, Muhammad Musa risked his life countless times to
            bring the frontline news into the living rooms of homes across the
            nation. Before Sector commanders devised their war strategies, it
            was a regular occurrence for him to be asked to slip behind enemy
            lines and gather vital information about the enemy manoeuvrings and
            their defence positions. On 29 November 1971, he was captured at
            Chachra (Sector 8) by the Pakistan Army and was fortunate to escape
            death after four days of inhumane torture at the hands of the
            Pakistani interrogators. The scars he bears today are a constant
            reminder of his past. In 1971 his articles explaining and defending
            the cause of the Liberation War of Bangladesh were syndicated
            worldwide and published in many of the world's most respected
            journals. He has written a book on the history of the liberation war
            of Bangladesh in Bengalee titled "Muktijuddya Hridaye Mamo",
            published by Kashban Prakashani in 1994. Muhammad Musa, double M.A
            (Pol. Science,1st class), M.A in Bengali (1st class), author,
            broadcaster, raconteur, journalist, Freedom Fighter and patriot is
            more popularly known under his pen name, Musa Sadik. He is married
            with two sons, lives in Dhaka, and is a former Secretary to the
            Government of Bangladesh and Secretary-General of the Freedom
            Fighter Officers-Employees Welfare Association of the Republic. Men
            like Bangabandhu Sheikh Mujibur Rahman, Muhammad Musa and millions
            of Freedom Fighters of Bangladesh have helped and contributed
            freedom to their nation, but perhaps equally as important, they've
            given hope to all suppressed nations in the world. The book
            essentially deals with the war of liberation of a country, yet it
            conveys the message of peace and liberty to the trouble-ridden
            humanity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
