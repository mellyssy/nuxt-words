import constants from "~/constants";
const { prefix, base } = constants;

const parseResult = ({meanings, origin, phonetic, word}) => {
  return meanings.flatMap(({ partOfSpeech, definitions }) => {
    return definitions.map(({ definition }) => {
      return {
        phonetic, word, partOfSpeech, origin, definition
      }
    });
  });
};

async function fetchMeanings ({ commit }, word) {
  try {
    commit('setLoading', true);
    const [ result ] = await this.$axios.$get(`${prefix}${base}${word.toLowerCase()}`);
    const parsed = parseResult(result);
    commit('add', parsed);
    commit('setSearchSuccess', true);
    commit('setLoading', false);
  } catch (err) {
    commit('setSearchSuccess', false);
    commit('setLoading', false);
  }
};

export default { fetchMeanings };
