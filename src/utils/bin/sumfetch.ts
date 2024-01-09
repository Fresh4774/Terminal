import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
    This is Aquin OpenSource.
    -----------
    Aquin OpenSource
    itssAquin/Aquin470
    <u><a href="https://aquin.app" target="_blank">V1.1</a></u>
    <u><a href="https://aquindoc.vercel.app" target="_blank">Documentation</a></u>
    <u><a href="https://aquindoc.vercel.app" target="_blank">Zone</a></u>
    <u><a href="https://discord.com/invite/HfXbsufW9T" target="_blank">Community</a></u>
    <u><a href="https://twitter.com/itssAquin" target="_blank">X</a></u>
    <u><a href="https://www.youtube.com/@Aquin470" target="_blank">YouTube</a></u>

`;
  } else {
    return `
      This is Aquin OpenSource.
      -----------
      Aquin OpenSource
      itssAquin/Aquin470
      <u><a href="https://aquin.app" target="_blank">V1.1</a></u>
      <u><a href="https://aquindoc.vercel.app" target="_blank">Documentation</a></u>
      <u><a href="https://aquindoc.vercel.app" target="_blank">Zone</a></u>
      <u><a href="https://discord.com/invite/HfXbsufW9T" target="_blank">Community</a></u>
      <u><a href="https://twitter.com/itssAquin" target="_blank">X</a></u>
      <u><a href="https://www.youtube.com/@Aquin470" target="_blank">YouTube</a></u>
`;
  }
};

export default sumfetch;
