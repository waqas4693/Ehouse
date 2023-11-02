import React, { useState, FC } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandableSectionProps {
    question: string;
    answer: string;
  }

const ExpandableSection: FC<ExpandableSectionProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (): void => {
    setExpanded(!expanded);
  };  

  return (
    <Accordion expanded={expanded} onChange={handleExpand} sx={{py: 1}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight="700">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" fontWeight="400">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandableSection;