import * as React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import { WithStyles, createStyles, Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    typo: {
      width: '100%',
    },
  });

type TestCompWithStyleProps<T> = {
  text: string;
  onClick?: (arg: T) => void;
} & WithStyles<typeof styles>;

export class TestComp<T> extends React.Component<TestCompWithStyleProps<T>> {
  render() {
    const { classes, text } = this.props;
    return <Typography className={classes.typo}>{text}</Typography>;
  }
}

export const TestCompWithStyle = withStyles(styles)(TestComp);
