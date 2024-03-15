import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl">
        Mr Arun is an Indian journalist and businessperson who is the Editor-in-chief of Media TV, an Indian news outlet.Mr.Arun is known for his show Janta Ki Adalat in which he is seen interviewing politicians and celebrities in a courtroom-like setting.
        </p>
        <p className="text-xl">
          <br/>
          <h1><b>Career:-</b></h1>
          <br/>
          After having completed his Master's degree (M Com), he was hired as a researcher by Janardan Thakur, a journalist who had just quit Ananda Bazar Patrika to start a new syndicate column. Subsequently, he joined the Onlooker Magazine as a trainee and then went on to become its editor in 1985. By this time,Mr.Arun had shifted base to Mumbai. After having spent three years at Onlooker, he joined Sunday Observer as an editor and later on The Media TV as chief-editor.
          In 1993, the first episode of Janta Ki Adalat was shot for Zee TV.
          </p>
          <p className="text-xl">
            <br/>
            <h1><b>Awards:-</b></h1>
            <br/>
            <li>2016:- Indian television news anchor.</li>
            <li>2017:- Indian television talk show hosts.</li>
            <li>2018:- Indian Male Television Journalists</li>
            </p>
      </div>
    </div>
  )
}

export default About;
