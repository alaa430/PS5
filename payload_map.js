const payload_map = [
  {
    displayTitle: 'etaHEN',
    description: '', // Dejar "description" vacío
    info: 'Descripción de etaHEN', // Mantener "info"
    fileName: 'etaHEN-1.7B.bin.gz',
    author: 'LM',
    version: '?'
  },
  {
    displayTitle: "libhijacker game-patch",
        description: "Patches supported games to run at higher framerates, and adds debug menus to certain titles.",
        fileName: "libhijacker-game-patch.v1.160.elf",
        author: "illusion0001, astrelsky",
        projectSource: "https://github.com/illusion0001/libhijacker",
        binarySource: "https://github.com/illusion0001/libhijacker-game-patch/releases/tag/1.160-75ab26a3",
        version: "1.160",
        supportedFirmwares: ["3.", "4."]
  },
  {
    displayTitle: "ps5-kstuff",
        description: "FPKG enabler",
        fileName: "ps5-kstuff.bin",
        author: "sleirsgoevy",
        projectSource: "https://github.com/sleirsgoevy/ps4jb-payloads/tree/bd-jb/ps5-kstuff",
        binarySource: "https://github.com/sleirsgoevy/ps4jb2/blob/3e6053c3e4c691a9ccdc409172293a81de00ad7f/ps5-kstuff.bin",
        version: "3e6053c",
        supportedFirmwares: ["3.", "4."]
  },
  {
    displayTitle: 'Remove Cache',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Remove Cache', // Mantener "info"
    fileName: 'Browser_appCache_remove.elf',
    author: 'Storm21CH',
    version: '1.0fix'
  },
  {
    displayTitle: 'Version',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Versions', // Mantener "info"
    fileName: 'versions.elf',
    author: '?',
    version: '1.0'
  },
  {
    displayTitle: 'Fan control',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Fan control', // Mantener "info"
    fileName: 'fan_threshold.elf',
    author: '?',
    source: '?',
    version: '1.0'
  },
   {
            displayTitle: 'Backup DB',
            description: '', // Dejar "description" vacío
            fileName: 'Backup-db-PS5.bin',
            info: 'Descripción de Backup DB', // Mantener "info"
            author: '?',
            source:'?',
            version: '0.5'
        },
  
{
            displayTitle: 'ELF Loader',
            description: '', // Dejar "description" vacío
            fileName: 'elfldr.elf',
            info: 'ELF Loader', // Mantener "info"
            author: 'ELF Loader',
            source: 'ELF Loader',
            version: '1.1'
        },

];

// JavaScript para mostrar info en lugar de description
const btns = document.querySelectorAll('.btn');
const infoElement = document.getElementById('info'); // Obtén el elemento de info por su ID

btns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    const info = btn.getAttribute('data-info');
    infoElement.textContent = info; // Actualiza el contenido del elemento de info
  });

  btn.addEventListener('mouseout', () => {
    infoElement.textContent = ''; // Limpia el contenido cuando el ratón sale del elemento
  });
});
