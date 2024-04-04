import React from 'react'
import GithubIcon from '../../public/images/github-icon.svg';
import LinkedinIcon from '../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I am always open to discussing new projects, creative ideas or opportunities to collaborate.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/Mrmbengan">
                    <Image src={GithubIcon} alt="github-icon" width={30} height={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/matias-bengtsson/">
                    <Image src={LinkedinIcon} alt="linkedin-icon" width={30} height={30} /> 
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
