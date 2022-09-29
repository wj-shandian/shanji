import {Dimensions} from 'react-native';

const rem = Dimensions.get('window').width / 320;

const properties = [
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingVertical',
  'paddingHorizontal',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'left',
  'right',
  'top',
  'bottom',
  'top',
  'left',
  'right',
  'fontSize',
  'borderWidth',
  'borderLeftWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderRadius',
  'paddingHorizontal',
  'paddingVertical',
  'marginHorizontal',
  'marginVertical',
  'lineHeight',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
];

module.exports = function ({types: t}) {
  return {
    name: 'rem-transform', // not required
    visitor: {
      CallExpression(path, state) {
        const calleeNode = path.get('callee');
        console.log(11111);

        let satisfied = calleeNode.isIdentifier({name: 'StyleSheet.create'});
        // if (!satisfied) {
        //   const isSatifiedExpression =
        //     calleeNode.isMemberExpression() &&
        //     calleeNode.get('object').isIdentifier({name: 'EStyleSheet'}) &&
        //     calleeNode.get('property').isIdentifier({name: 'create'});
        //   satisfied =
        //     isSatifiedExpression &&
        //     /(nusi-mobile)|(nusi-pos)/.test(state.file.opts.filename);
        // }
        if (satisfied) {
          path.traverse({
            ObjectProperty(subpath) {
              if (properties.includes(subpath.get('key.name').node)) {
                if (
                  subpath.get('value').isNumericLiteral() &&
                  subpath.get('value').node.value !== 0
                ) {
                  const val = `${subpath.get('value').node.value}rem`;
                  subpath.get('value').replaceWith(t.stringLiteral(val));
                } else if (
                  subpath.get('value').isStringLiteral() &&
                  subpath.get('value').node.value.startsWith('$')
                ) {
                  const val = `${rem} * ${subpath.get('value').node.value}`;
                  subpath.get('value').replaceWith(t.stringLiteral(val));
                }
              }
            },
          });
        }
      },
    },
  };
};
