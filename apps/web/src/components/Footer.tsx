import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-600 dark:text-gray-400 text-center sm:text-left">
          Desarrollado por{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Daniel Martinez
          </span>{" "}
          · Prueba Técnica Fullstack
        </p>

        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/Danielmartinez25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-mart/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 text-center py-3 text-xs text-gray-400">
        © {new Date().getFullYear()} Daniel Martinez. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
