import Candidate from './model';
import JWT from '../user/jwt';
import User from '../user/model'

export default {
  create: async (req, res) => {
    console.log(req.body.formValues)
    const data = req.body.formValues;
    const user = req.user;
    try {
      const foundCandi = await Candidate.findOne({website: data.website})
      console.log('foundCandi',foundCandi);
      if (foundCandi) {
        res.status(500).json({message: 'This company already exists. Please contact the customer service for more detail.'})
      }
    } catch(err) {
      res.status(500).json({message: 'Something went wrong'})
    }
    
    try{
      const createdComp = await Candidate.create({...data,approve_status:false, applicant:user._id});
      const updatedUser = await User.findByIdAndUpdate(user._id,{candidate:createdComp._id})
      console.log(updatedUser);
      res.status(200).json({candidate:createdComp})
    } catch(err){
      res.status(500).json({message: 'something went wrong'})
    }
  },
  show: async ( req,res ) => {
    console.log('hii there')
    console.log(req.params)
    const CandiId = req.params.id;

    try {
      const foundCandi = await Candidate.findById(CandiId)
      console.log(foundCandi);
      if (!foundCandi) {
        res.status(500).json({message: 'There is no application under this user.'})
      }
      
      console.log('yesss')
      res.status(200).json({candidate:foundCandi})

    } catch {
      res.status(500).json({message:'Something went wrong.'})
    }
  },
  showAll: async (req, res) => {
    console.log(req.user)
    console.log('in showall')
    try {
      const allCandidate= await Candidate.find({approve_status:false})
      console.log(allCandidate)
      res.status(200).json({candidates:allCandidate})
    } catch(err) {
      res.status(500).json({message:"something went wrong"})
    }
  },
  edit: async (req, res) => {
    console.log('in edit candidtate')
    const token = req.params.jwt;
    const user_id = await JWT.verifyToken(token);
    const candi_id = req.params.cId;
    res.status(200);
  },
  approve: async (req,res) => {
    res.status(200);
  }
}