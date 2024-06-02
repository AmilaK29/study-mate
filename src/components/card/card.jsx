import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FrontEndImg from '../../assets/Frontend.jpg';
import { useState } from 'react';
import "./card.css"

function ProfileCard({Name,Subject,Description}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => setIsExpanded(!isExpanded);
  
    const truncateDescription = (text, length) => {
      if (text.length <= length) {
        return text;
      }
      return text.substring(0, length) + '...';
    };
  
    const maxLength = 100; // Maximum length for the truncated description
  
    return (
        <Card className="profile-card">
        <Card.Img variant="top" src={FrontEndImg} />
        <Card.Body>
          <Card.Title>{Subject} by {Name}</Card.Title>
          <Card.Text className={isExpanded ? '' : 'truncate'}>
            {Description}
          </Card.Text>
          {/* <Button variant="link" onClick={toggleDescription}>
            {isExpanded ? 'See Less' : 'See More'}
          </Button> */}
          <Button variant="primary">View Profile</Button>
        </Card.Body>
      </Card>
    );
}

export default ProfileCard;