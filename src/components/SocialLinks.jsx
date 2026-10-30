import { useEffect } from "react";
import { Linkedin, Github, Instagram, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/titan-adhitya-herlambang-27a9a2293/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@titanadhitya_",
    icon: Instagram,
    url: "https://www.instagram.com/titanadhitya_/?hl=id",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@TitanAdhitya16",
    icon: Github,
    url: "https://github.com/titanadhitya16",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLink = ({ link, primary = false, index = 0 }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-[#d9c779]/30 ${
        primary ? "w-full" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={100 + index * 100}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />
      <div className="relative flex min-w-0 items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5"
          style={{ color: link.color }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-gray-200">
            {link.displayName}
          </span>
          <span className="truncate text-xs text-gray-400">{link.subText}</span>
        </span>
      </div>
      <ExternalLink className="relative ml-3 h-4 w-4 shrink-0 text-gray-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
};

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  const [linkedIn, ...otherLinks] = socialLinks;

  return (
    <div className="social-links-panel w-full rounded-2xl border border-white/10 bg-black p-6 py-8">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
        <span className="inline-block h-1 w-8 rounded-full bg-[#d9c779]" />
        Connect With Me
      </h3>
      <div className="flex flex-col gap-4">
        <SocialLink link={linkedIn} primary />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {otherLinks.map((link, index) => (
            <SocialLink key={link.name} link={link} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
